window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    return this._data[id] = String(val);
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return this._data = {};
  }
};

function LocalStorageManager() 
{
	var supported = this.localStorageSupported();
	this.storage = supported ? window.localStorage : window.fakeStorage;

	// version clearing
	var currentversion = "0.1";
	var version = this.storage.getItem("Version") || 0;
	if (version != currentversion)
		this.storage.clear();
	this.storage.setItem("Version", currentversion);

}

LocalStorageManager.prototype.localStorageSupported = function () 
{
	var testKey = "test";
	var storage = window.localStorage;
  
	try 
	{
		storage.setItem(testKey, "1");
		storage.removeItem(testKey);
		return true;
	} 
	catch (error) 
	{
		return false;
	}
};

