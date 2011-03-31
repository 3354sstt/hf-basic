function() {
  var vetId = $(this).parent().parent().attr("vetid");
  if (vetId.length == 32) {
    $("#vet_name")[0].textContent = $(this).parent().siblings()[1].textContent;
    var app = $$(this).app;

    app.db.openDoc(vetId, {
      success : function(doc) {

        var vetLastName = doc.name.last.toUpperCase();
        $("#byPref")[0].textContent = doc.name.last;
        var prefSel = $("select[name='ByPrefSel']");
        prefSel.find('option').remove().end();
        var prefOpt = prefSel.attr('options');
        app.db.view("basic/guardians_by_pref", {
          descending : false,
          limit: 10,
          startkey : [ vetLastName ],
          endkey : [ vetLastName + "\ufff0" ],
          success: function(resp) {
            selected = true;
            for (idx in resp.rows) {
              row = resp.rows[idx];
              entry = row.value.name + " | " + row.value.pref;
              prefOpt[prefOpt.length] = new Option(entry, row.id, selected, selected);
              selected = false;
            }
          }
        })

        var startZip = parseInt(doc.address.zip.substr(0, 5));
        var endZip = startZip + 1;
        $("#byZip")[0].textContent = startZip;
        var zipSel = $("select[name='ByZipSel']");
        zipSel.find('option').remove().end();
        var zipOpt = zipSel.attr('options');
        app.db.view("basic/guardians_by_zip", {
          descending : false,
          limit: 10,
          startkey : [ startZip.toString() ],
          endkey : [ endZip.toString() ],
          success: function(resp) {
            selected = true;
            for (idx in resp.rows) {
              row = resp.rows[idx];
              entry = row.value.name + " | " + row.value.street + " | " + row.value.city;
              zipOpt[zipOpt.length] = new Option(entry, row.id, selected, selected);
              selected = false;
            }
          }
        })

        var state = doc.address.state.toUpperCase();
        var startCounty = doc.address.county.toUpperCase();
        var startCity = doc.address.city.toUpperCase();
        var endCity = startCity.toUpperCase() + "\ufff0";

        $("#byCity")[0].textContent = doc.address.city;
        var citySel = $("select[name='ByCitySel']");
        citySel.find('option').remove().end();
        var cityOpt = citySel.attr('options');
        app.db.view("basic/guardians_by_city", {
          descending : false,
          limit: 10,
          startkey : [ state, startCounty, startCity ],
          endkey : [ state, startCounty, endCity ],
          success: function(resp) {
            selected = true;
            for (idx in resp.rows) {
              row = resp.rows[idx];
              entry = row.value.name + " | " + row.value.street + " | " + row.value.zip;
              cityOpt[cityOpt.length] = new Option(entry, row.id, selected, selected);
              selected = false;
            }
          }
        })


        var endCounty = startCounty.toUpperCase() + "\ufff0";
        $("#byCounty")[0].textContent = doc.address.county;
        var countySel = $("select[name='ByCountySel']");
        countySel.find('option').remove().end();
        var countyOpt = countySel.attr('options');
        app.db.view("basic/guardians_by_county", {
          descending : false,
          limit: 10,
          startkey : [ state, startCounty ],
          endkey : [ state, endCounty ],
          success: function(resp) {
            selected = true;
            for (idx in resp.rows) {
              row = resp.rows[idx];
              entry = row.value.name + " | " + row.value.street + " | " + row.value.city;
              countyOpt[countyOpt.length] = new Option(entry, row.id, selected, selected);
              selected = false;
            }
          }
        })


        var app_dateSel = $("select[name='ByAppDateSel']");
        app_dateSel.find('option').remove().end();
        var app_dateOpt = app_dateSel.attr('options');
        app.db.view("basic/guardians_by_app_date", {
          descending : false,
          limit: 10,
          startkey : [ "None" ],
          endkey : [ "None\ufff0" ],
          success: function(resp) {
            selected = true;
            for (idx in resp.rows) {
              row = resp.rows[idx];
              entry = row.value.name + " | " + row.value.street + " | " + row.value.city;
              app_dateOpt[app_dateOpt.length] = new Option(entry, row.id, selected, selected);
              selected = false;
            }
          }
        })


        $("#trigger").click();
      }
    });
  }
  return false;
};

//@ sourceURL=flight_detail/loggedIn/selectors/#.modalInput/click.js
