/**
 * @file 公用 utils
 * @author tracy (qiushidev@gmail.com)
 */
import defaults from './defaults';

export function debug(msg) {
    let isDebug = defaults.getOptions().debug;

    if (isDebug) {
        console.log('[SW DEBUG INFO]:');
        console.log(msg);
    }
}
