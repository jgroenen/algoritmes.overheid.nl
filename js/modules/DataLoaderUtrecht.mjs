export default function () {
    var data;

    function transform(rawData) {
        var data = [];
        for (var i in rawData) {
            data = data.concat(rawData[i].map(function (item) {
                return {
                    "name": item["1. Naam van het proces"],
                    "organization": "Gemeente Utrecht",
                    "description_short": `Het doel van het algorithme is ${item["2. Omschrijving van het proces"]}. ${item["4. Geeft het algoritme of voorspellend model informatie of neemt het zelfstandig een besluit?"]}`,
                    "type": "niet beschikbaar",
                    "domain": i,
                    "status": "niet beschikbaar"
                };
            }));
        }
        return data;
    }

    async function getData() {
        return data ? data:
            data = transform(await fetch ('/testdata/utrecht.json').then(rs => rs.json()));
    }

    return {
        getData
    };

}