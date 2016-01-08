class Templates {
  constructor() {
    this._cache = {};
  }

  get(templateName) {
    return new Promise((resolve, reject)=> {
      if (this._cache.hasOwnProperty(templateName)) {
        resolve(this._cache[templateName]);
      } else {
        return this._httpRequest(templateName, resolve, reject);
      }
    });
  }

  _httpRequest(templateName, resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', templateName, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(this._cache[templateName] = xhr.responseText);
        } else {
          reject('Failed to load template.');
        }
      }
    };
    xhr.send(null);
  }
}

export default new Templates();