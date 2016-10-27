const StringUtils = {};

StringUtils.isValid = (str) => {
    return str && str != null && str != undefined && str.toLowerCase() != 'null' && str.toLowerCase() != 'undefined' && str.trim().length > 0;
};

export default StringUtils;
