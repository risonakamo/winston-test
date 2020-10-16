import {createLogger,format,transports} from "winston";

type TransformableInfo=import("winston").Logform.TransformableInfo;

const logger=createLogger({
    format:format.combine(
        format.timestamp({
            format:"YYMMDD hh:mm:ss"
        }),
        format.printf((log:TransformableInfo)=>{
            console.log(log);
            return `${log.timestamp} ${log.message}`;
        })
    ),
    transports:[
        new transports.File({
            filename:"output.log"
        })
    ]
});

logger.level="debug";
logger.debug("hello","there","there2");
logger.level="info";
logger.debug("this shouldnt show up");