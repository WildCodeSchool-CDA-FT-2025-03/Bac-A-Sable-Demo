import { createLogger, format, transports } from "winston";

const toSCV = format.printf(
  ({ timestamp, message, level }) =>
    `${timestamp}, ${level}, ${JSON.stringify(message)}`
);

const loggerTransporter = [];
if (process.env.NODE_ENV !== "production") {
  // MOn system de log doit utiliser la console
  loggerTransporter.push(
    new transports.Console({
      format: format.json(),
    })
  );
} else {
  // Mon systeme doit memoriser le log en fichier
  loggerTransporter.push(
    new transports.File({
      filename: "log/error.log",
      level: "error",
      format: format.combine(format.timestamp(), toSCV),
    })
  );
}

const logger = createLogger({
  level: "error",
  format: format.combine(format.timestamp(), format.json()),
  transports: loggerTransporter,
});

export default logger;
