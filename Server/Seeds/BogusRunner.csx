#r "nuget:Bogus, 35.5.1"
#r "nuget:Microsoft.EntityFrameworkCore, 8.0.4"
#r "nuget:Npgsql.EntityFrameworkCore.PostgreSQL, 8.0.2"
#r "nuget:Microsoft.Extensions.Configuration, 8.0.0"
#r "nuget:Microsoft.Extensions.Configuration.Json, 8.0.0"

// Charger les fichiers de code source
#load "Bogus.cs"

using Server.Seeds;

var bogus = new BogusClass();
bogus.InsertFakeData();
