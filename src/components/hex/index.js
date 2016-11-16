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

    if (params !== undefined) {
        url = url + '?' + Hex.toQuery(params);
    }

    fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => {
        if (res.ok) {
            res.json().then(data => cb(data));
        }
    });
};

Hex.post = (url, params, cb) => {
    fetch(url, {
        method: 'POST',
        body: Hex.toParams(params),
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => {
        if (res.ok) {
            res.json().then(data => cb(data));
        }
    });
};

Hex.put = (url, params, cb) => {
    fetch(url, {
        method: 'PUT',
        body: Hex.toParams(params),
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => {
        if (res.ok) {
            res.json().then(data => cb(data));
        }
    });
};

Hex.delete = (url, cb) => {
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => {
        if (res.ok) {
            res.json().then(data => cb(data));
        }
    });
};

Hex.handleChangeByName = (me, e) => {
    const fields = e.target.name.split('/');
    me.state[fields[0]][fields[1]] = e.target.value;
    me.setState({});
};

export default Hex;
