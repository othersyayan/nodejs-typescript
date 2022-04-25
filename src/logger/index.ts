import logger from 'pino';
import dayjs from 'dayjs';

const log = logger({
  prettyPrint: true,
  base: {
    pid: false
  },
  timestamp: () => dayjs().format("YYYY-MM-DD HH:mm:ss.SSS")
})

export default log;