const Hex = {};

Hex.toParams = (object) => {
    const data = new URLSearchParams();
    Object.keys(object).map(key => data.set(key, object[key]));
    return data;
};

Hex.toQuery = (object) => Object.keys(object)
    .filter(key => object[key] !== null && object[key] !== undefined)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`)
    .join('&');

Hex.get = (url, params, cb) => {
    if (cb === undefined) {
        cb = params;
        params = undefined;
    }

    url = url + '.json';
    if (params !== undefined) {
        url = url + '?' + Hex.toQuery(params);
    }

    fetch(url).then(res => {
        if (res.ok) {
            res.json().then(data => cb(data));
        }
    });
};

export default Hex;
