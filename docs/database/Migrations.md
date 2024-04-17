# Comment effectuer un changement dans la base de données ?

## Créer l'entité (table)
- Créer une classe dans le dossier Server/Models
- Faire hériter cette classe de ModelBase
- Ajouter les propriétés désirées

## Référencer l'entité
Référencer l'entité dans le fichier Server/Database/DataContext.cs en y ajoutant un attribut.

```csharp
public DbSet<Entity> Entities { get; set; }
```

## Générer une migration
Entrer la commande suivante à la racine du projet Server.

```
dotnet migrations add MigrationName
```

La migration est ajoutée dans le dossier Server/Migrations.

Lancer le projet, la migration sera effectuée automatiquement.

Après chaque changement de la structure de la base de données, appliquer les étapes ci-dessus.