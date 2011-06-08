function(r) {
  //$.log(resp.app_date)  
  var app = $$(this).app;
  var dbname = app.db.name;
  var pairList = [];

  if (r.pairs) {
    for (idx in r.pairs) {
      entry = {};
      pair = r.pairs[idx];

      if (pair.vet) {
        vet = pair.vet;
        entry["vet_id"]         = vet.id;
        entry["vet_name_first"] = vet.name_first;
        entry["vet_name_last"]  = vet.name_last;
        entry["vet_city"]       = vet.city;
        entry["vet_appdate"]    = vet.flight;
        entry["vet_group"]      = vet.group;
        entry["vet_seat"]       = vet.seat;
        entry["vet_pairing"]    = vet.pairing;
        entry["vet_pairName"]   = vet.pairName;
        entry["vet_pairPref"]   = vet.pairPref;
      }

      if (pair.grd) {
        if (pair.grd.length > 1) {
          entry["invalid_row"] = " invalid_row";
        } else {
          entry["invalid_row"] = "";
        }
        grd = pair.grd[0];
        entry["grd_id"]         = grd.id;
        entry["grd_name_first"] = grd.name_first;
        entry["grd_name_last"]  = grd.name_last;
        entry["grd_city"]       = grd.city;
        entry["grd_appdate"]    = grd.flight;
        entry["grd_group"]      = grd.group;
        entry["grd_seat"]       = grd.seat;
        entry["grd_pairing"]    = grd.pairing;
        entry["grd_pairName"]   = grd.pairName;
        entry["grd_pairPref"]   = grd.pairPref;
      }
      pairList.push(entry);
    }

    var result = {
        db_name:               dbname,
        id:                    "",
        raw_data_lnk:          "",
        rev:                   "",
        type:                  "Flight",
        flight_name:           "",
        capacity:              "",
        flight_date:           "",
        pairs:                 pairList
    }

  } else {

    var result = {
        db_name:               dbname,
        id:                    "",
        raw_data_lnk:          "",
        rev:                   "",
        type:                  "Flight",
        flight_name:           "",
        capacity:              "",
        flight_date:           ""
    }

  }

  return result;
}

//@ sourceURL=/pairings/data.js