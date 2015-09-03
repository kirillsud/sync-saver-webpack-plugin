fs = require('fs');

function SyncSaverPlugin(options) {
    this.options = options || { debug: false };
}

SyncSaverPlugin.prototype.apply = function apply(compiler) {
    var pluginOptions = this.options;

    var writeFile = function(filename, data, options, callback) {
        if (!!pluginOptions.debug) {
            console.log('Emitted synchronous saving for file ' + filename);
        }

        if (typeof options !== 'object') {
            callback = options;
            options = undefined;
        }

        if (typeof callback !== 'function') {
            callback = function(){};
        }

        try {
            fs.writeFileSync(filename, data, options);
        } catch (err) {
            callback(err);
            return;
        }

        callback();
    };

    compiler.plugin('run', function(compiler, callback) {
        compiler.outputFileSystem.writeFile = writeFile;
        callback();
    });
};

module.exports = SyncSaverPlugin;
