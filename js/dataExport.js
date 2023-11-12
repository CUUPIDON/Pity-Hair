(() => {
    window.modModLoadController.addLifeTimeCircleHook('moddedHair exportDataZip', {
        exportDataZip: async (zip) => {
            // export data that injected to memory
            zip.file('moddedHair/js/hairstyles/fringe', JSON.stringify(window.DOL.setup?.hairstyles?.fringe, undefined, 2));
            zip.file('moddedHair/js/hairstyles/sides', JSON.stringify(window.DOL.setup?.hairstyles?.sides, undefined, 2));
            return zip;
        }
    })
})();
