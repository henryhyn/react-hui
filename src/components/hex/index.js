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

Hex.post = (url, params, cb) => {
    url = url + '.json';
    fetch(url, {
        method: 'POST',
        body: Hex.toParams(params)
    }).then(res => {
        if (res.ok) {
            res.json().then(data => cb(data));
        }
    });
};

Hex.put = (url, params, cb) => {
    url = url + '.json';
    fetch(url, {
        method: 'PUT',
        body: Hex.toParams(params)
    }).then(res => {
        if (res.ok) {
            res.json().then(data => cb(data));
        }
    });
};

Hex.delete = (url, cb) => {
    url = url + '.json';
    fetch(url, {
        method: 'DELETE'
    }).then(res => {
        if (res.ok) {
            res.json().then(data => cb(data));
        }
    });
};

export default Hex;
