# Installing SchemaSpy on Windows 11

## Prerequisites
* Postgres Installation
* Java Installation

## Version Note
If installing version 5 or lower, a JavaScript library (viz.js or Graphviz are recommended) is necessary for graphical rendering of the schema map.

In version 6 and higher, viz.js is included in the package, _however_ you **must** include -_vizjs_ as an argument in the command or the application will look for Graphviz causing errors.

## Step 1 - Download Postgres JDBC
* The JDBC can be downloaded [here](https://jdbc.postgresql.org/download/).
    * The Java 8 compatible version should be used until newer version(s) become available.
* Move the **postgresql-##.#.#.jar** to your */tools/lib* directory

## Step 2 - Download Latest Version of SchemaSpy
* Navigate to the SchemaSpy [Releases](https://github.com/schemaspy/schemaspy/releases) page and download the most recent release.
* Move the **schemaspy-#.#.#.jar** to /tools/SchemaSpy

## Step 3 - Create a Config File for Each Database
* In the */tools/SchemaSpy* directory, create a config file for a database and schema (ex. "main.yaml")
  * For extensibility, create a config file for each schema
  * *Note: no naming syntax for config file is required, I simply chose .yaml to help the editor recognize the syntax*
### main.yaml
```yaml
# type of database and data provider (jdbc)
schemaspy.t=pgsql
schemaspy.dp=/tools/lib/postgresql-42.7.4.jar

# database properties: host, port number, name user, password
schemaspy.host=localhost
schemaspy.port=5432
schemaspy.db=main_db
schemaspy.u=main_user
schemaspy.p=main_password

# output dir to save generated files
schemaspy.o=/tools/SchemaSpy/output/main

# db scheme for which generate diagrams
schemaspy.s=main
```

## Step 4 - Run SchemaSpy
* From the /tools/SchemaSpy directory, you can now run SchemaSpy from the command line using the following command to reference your config file:
`java -jar schemaspy-6.2.4.jar -vizjs -configFile main.yaml
  `

## Step 5 - Create batch scripts 
* Create a batch file for each schema based upon the command from Step 4 including the fully qualified paths
### schema-spy-main.bat
```
java -jar C:/tools/SchemaSpy/schemaspy-6.2.4.jar -vizjs -configFile C:/tools/SchemaSpy/main.yaml
```
* Create another batch file in *C:/scripts* that references each schema's batch file
### schema-spy.bat
```
call C:/tools/SchemaSpy/schema-spy-main.bat
call C:/tools/SchemaSpy/schema-spy-secondary.bat
```
* If /scripts is on the Path, you can now simply type `schema-spy` from the command line to regenerate your ER diagrams

## Step 6 - Bookmark generated schemas
* In your browser, navigate to _/tools/SchemaSpy/output/[SCHEMA_NAME]/index.html_ to view the generated reports and bookmark them

## References
* https://github.com/traderres/webClass/blob/master/learnSchemaSpy/howToInstallSchemaSpyForPostgresWithoutAdmin.txt
* https://schemaspy.readthedocs.io/en/latest/installation.html
* http://www.goring.org/resources/schemaspy_tutorial.html