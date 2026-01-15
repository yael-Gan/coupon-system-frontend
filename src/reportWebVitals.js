import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';
var reportWebVitals = function (onPerfEntry) {
    if (onPerfEntry && typeof onPerfEntry === 'function') {
        onCLS(onPerfEntry);
        onFCP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
    }
};
export default reportWebVitals;
