// gives access to variables in .env file, don't delete
import dotenv from "dotenv"
dotenv.config()

function welcome() {
  console.log("\nhello world\n\ntake a look at the README to get started")
}

welcome()
