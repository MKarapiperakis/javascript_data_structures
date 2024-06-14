import connect from "connect";
import serveStatic from "serve-static";
import { fileURLToPath } from "url";
import { dirname } from "path";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

connect()
  .use(serveStatic(__dirname))
  .listen(8080, () =>
    console.log(
      "Up & running on " + chalk.blue.underline.bold(`http://localhost:8080/public`)
    )
  );
