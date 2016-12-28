import React from 'react';
import { Tag } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const Hex = {};

Hex.toParams = (object) => {
    const data = new URLSearchParams();
    Object.keys(object)
        .filter(key => Hex.validAny(object[key]))
        .map(key => data.set(key, object[key]));
    return data;
};

Hex.toQuery = (object) => Object.keys(object)
    .filter(key => Hex.validAny(object[key]))
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
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
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
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
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
    if (fields.length > 1) {
        me.state[fields[0]][fields[1]] = e.target.value;
    } else {
        me.state[fields[0]] = e.target.value;
    }
    me.setState({});
};

Hex.validAny = any => any !== null && any !== undefined;
Hex.validString = str => Hex.validAny(str) && str && str.toLowerCase() != 'null' && str.toLowerCase() != 'undefined' && str.trim().length > 0;
Hex.validNumber = num => Hex.validAny(num);

Hex.toDate = m => Hex.validAny(m) ? m.toDate() : moment().toDate();
Hex.formatDate = date => Hex.validAny(date) ? moment(date, moment.x).format('YYYY-MM-DD HH:mm') : '';
Hex.toMoment = date => Hex.validAny(date) ? moment(date, moment.x) : null;
Hex.fromNow = date => Hex.validAny(date) ? moment(date, moment.x).fromNow() : null;

Hex.renderStatus = status => {
    let color = '#87d068';
    if (status > 0) {
        color = '#2db7f5';
    }
    if (status < 0) {
        color = '#f50';
    }

    switch (status) {
        case -2:
            return <Tag color={color}>失败</Tag>;
        case -1:
            return <Tag color={color}>下线</Tag>;
        case 0:
            return <Tag color={color}>初始</Tag>;
        case 1:
            return <Tag color={color}>在线</Tag>;
        case 2:
            return <Tag color={color}>成功</Tag>;
        default:
            return <Tag color={color}>未知</Tag>;
    }
};
export default Hex;
