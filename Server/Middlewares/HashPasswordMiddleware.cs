using System.Security.Cryptography;
using System.Text;
using Newtonsoft.Json.Linq;

namespace Server.Middlewares
{
    public class HashPasswordMiddleware
    {
        private readonly RequestDelegate _next;

        public HashPasswordMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var requestBody = await new StreamReader(context.Request.Body).ReadToEndAsync();

            if (!string.IsNullOrEmpty(requestBody))
            {
                var json = JObject.Parse(requestBody);
                var password = json["password"]?.ToString();

                if (!string.IsNullOrEmpty(password))
                {
                    var salt = GenerateSalt();
                    var hashedPassword = HashPassword(password, salt);

                    json["password"] = hashedPassword;

                    context.Request.Body = new MemoryStream(
                        Encoding.UTF8.GetBytes(json.ToString())
                    );
                    context.Request.ContentLength = context.Request.Body.Length;
                    context.Request.Headers["Content-Length"] =
                        context.Request.Body.Length.ToString();
                    context.Request.ContentType = "application/json; charset=utf-8";
                }
            }

            await _next(context);
        }

        public static string HashPassword(string password, byte[] salt)
        {
            using (SHA256Managed sha256 = new SHA256Managed())
            {
                byte[] passwordBytes = Encoding.UTF8.GetBytes(password);
                byte[] saltedPassword = new byte[passwordBytes.Length + salt.Length];

                Buffer.BlockCopy(passwordBytes, 0, saltedPassword, 0, passwordBytes.Length);
                Buffer.BlockCopy(salt, 0, saltedPassword, passwordBytes.Length, salt.Length);

                byte[] hashedBytes = sha256.ComputeHash(saltedPassword);

                byte[] hashedPasswordWithSalt = new byte[hashedBytes.Length + salt.Length];
                Buffer.BlockCopy(salt, 0, hashedPasswordWithSalt, 0, salt.Length);
                Buffer.BlockCopy(
                    hashedBytes,
                    0,
                    hashedPasswordWithSalt,
                    salt.Length,
                    hashedBytes.Length
                );

                return Convert.ToBase64String(hashedPasswordWithSalt);
            }
        }

        public static byte[] GenerateSalt()
        {
            using (RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider())
            {
                byte[] salt = new byte[16];
                rng.GetBytes(salt);
                return salt;
            }
        }
    }
}
