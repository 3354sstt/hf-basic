function(r) {
  //$.log(resp.app_date)  
  var app = $$(this).app;

  var result = {
      grd_prefs: r.grd_prefs,
      vet_prefs: r.vet_prefs,
      lone_grds: r.lone_grd_prefs
  }

  return result;
}

//@ sourceURL=/pairing/data.js
