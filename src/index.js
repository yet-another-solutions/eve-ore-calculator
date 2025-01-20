
var stat_veldspar = {
    tritanium: 400,
    pyerite: 0,
    mexallon: 0,
    isogen: 0,
    nocxium: 0,
    zydrine: 0,
    megacyte: 0,
    morphite: 0
}
var stat_scordite = {
    tritanium: 150,
    pyerite: 90,
    mexallon: 0,
    isogen: 0,
    nocxium: 0,
    zydrine: 0,
    megacyte: 0,
    morphite: 0
}
var stat_pyroxeres = {
    tritanium: 0,
    pyerite: 90,
    mexallon: 30,
    isogen: 0,
    nocxium: 0,
    zydrine: 0,
    megacyte: 0,
    morphite: 0
}
var stat_plagioclase = {
    tritanium: 175,
    pyerite: 0,
    mexallon: 70,
    isogen: 0,
    nocxium: 0,
    zydrine: 0,
    megacyte: 0,
    morphite: 0
}
var stat_omber = {
    tritanium: 0,
    pyerite: 90,
    mexallon: 0,
    isogen: 75,
    nocxium: 0,
    zydrine: 0,
    megacyte: 0,
    morphite: 0
}
var stat_kernite = {
    tritanium: 0,
    pyerite: 0,
    mexallon: 60,
    isogen: 120,
    nocxium: 0,
    zydrine: 0,
    megacyte: 0,
    morphite: 0
}
var stat_jaspet = {
    tritanium: 0,
    pyerite: 0,
    mexallon: 150,
    isogen: 0,
    nocxium: 50,
    zydrine: 0,
    megacyte: 0,
    morphite: 0
}
var stat_hemorphite = {
    tritanium: 0,
    pyerite: 0,
    mexallon: 0,
    isogen: 240,
    nocxium: 90,
    zydrine: 0,
    megacyte: 0,
    morphite: 0
}
var stat_hedbergite = {
    tritanium: 0,
    pyerite: 450,
    mexallon: 0,
    isogen: 0,
    nocxium: 120,
    zydrine: 0,
    megacyte: 0,
    morphite: 0
}
var stat_gneiss = {
    tritanium: 0,
    pyerite: 2000,
    mexallon: 1500,
    isogen: 800,
    nocxium: 0,
    zydrine: 0,
    megacyte: 0,
    morphite: 0
}
var stat_dark_ochre = {
    tritanium: 0,
    pyerite: 0,
    mexallon: 1360,
    isogen: 1200,
    nocxium: 320,
    zydrine: 0,
    megacyte: 0,
    morphite: 0
}
var stat_crokite = {
    tritanium: 0,
    pyerite: 800,
    mexallon: 2000,
    isogen: 0,
    nocxium: 800,
    zydrine: 0,
    megacyte: 0,
    morphite: 0
}
var stat_spodumain = {
    tritanium: 48000,
    pyerite: 0,
    mexallon: 0,
    isogen: 1000,
    nocxium: 160,
    zydrine: 80,
    megacyte: 40,
    morphite: 0
}
var stat_arkonor = {
    tritanium: 0,
    pyerite: 3200,
    mexallon: 1200,
    isogen: 0,
    nocxium: 0,
    zydrine: 0,
    megacyte: 120,
    morphite: 0
};
var stat_bistot = {
    tritanium: 0,
    pyerite: 3200,
    mexallon: 1200,
    isogen: 0,
    nocxium: 0,
    zydrine: 160,
    megacyte: 0,
    morphite: 0
}
var stat_mercoxit = {
    tritanium: 0,
    pyerite: 0,
    mexallon: 0,
    isogen: 0,
    nocxium: 0,
    zydrine: 0,
    megacyte: 0,
    morphite: 140
}

document.getElementById("calculate").onclick = function() {

    var constraints = {
        tritanium: {"min": document.getElementById("tritanium_needed").value},
        pyerite: {"min": document.getElementById("pyerite_needed").value},
        mexallon: {"min": document.getElementById("mexallon_needed").value},
        isogen: {"min": document.getElementById("isogen_needed").value},
        nocxium: {"min": document.getElementById("nocxium_needed").value},
        zydrine: {"min": document.getElementById("zydrine_needed").value},
        megacyte: {"min": document.getElementById("megacyte_needed").value},
        morphite: {"min": document.getElementById("morphite_needed").value}
    }
    
    
    var variables = {
        veldspar: {
            tritanium: stat_veldspar.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_veldspar.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_veldspar.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_veldspar.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_veldspar.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_veldspar.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_veldspar.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_veldspar.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_veldspar_price").value
        },
        scordite: {
            tritanium: stat_scordite.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_scordite.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_scordite.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_scordite.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_scordite.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_scordite.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_scordite.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_scordite.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_scordite_price").value
        },
        pyroxeres: {
            tritanium: stat_pyroxeres.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_pyroxeres.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_pyroxeres.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_pyroxeres.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_pyroxeres.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_pyroxeres.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_pyroxeres.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_pyroxeres.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_pyroxeres_price").value
        },
        plagioclase: {
            tritanium: stat_plagioclase.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_plagioclase.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_plagioclase.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_plagioclase.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_plagioclase.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_plagioclase.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_plagioclase.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_plagioclase.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_plagioclase_price").value
        },
        omber: {
            tritanium: stat_omber.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_omber.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_omber.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_omber.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_omber.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_omber.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_omber.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_omber.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_omber_price").value
        },
        kernite: {
            tritanium: stat_kernite.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_kernite.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_kernite.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_kernite.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_kernite.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_kernite.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_kernite.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_kernite.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_kernite_price").value
        },
        jaspet: {
            tritanium: stat_jaspet.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_jaspet.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_jaspet.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_jaspet.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_jaspet.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_jaspet.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_jaspet.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_jaspet.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_jaspet_price").value
        },
        hemorphite: {
            tritanium: stat_hemorphite.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_hemorphite.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_hemorphite.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_hemorphite.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_hemorphite.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_hemorphite.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_hemorphite.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_hemorphite.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_hemorphite_price").value
        },
        hedbergite: {
            tritanium: stat_hedbergite.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_hedbergite.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_hedbergite.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_hedbergite.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_hedbergite.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_hedbergite.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_hedbergite.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_hedbergite.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_hedbergite_price").value
        },
        gneiss: {
            tritanium: stat_gneiss.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_gneiss.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_gneiss.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_gneiss.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_gneiss.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_gneiss.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_gneiss.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_gneiss.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_gneiss_price").value
        },
        dark_ochre: {
            tritanium: stat_dark_ochre.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_dark_ochre.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_dark_ochre.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_dark_ochre.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_dark_ochre.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_dark_ochre.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_dark_ochre.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_dark_ochre.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_dark_ochre_price").value
        },
        crokite: {
            tritanium: stat_crokite.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_crokite.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_crokite.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_crokite.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_crokite.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_crokite.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_crokite.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_crokite.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_crokite_price").value
        },
        spodumain: {
            tritanium: stat_spodumain.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_spodumain.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_spodumain.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_spodumain.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_spodumain.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_spodumain.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_spodumain.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_spodumain.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_spodumain_price").value
        },
        arkonor: {
            tritanium: stat_arkonor.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_arkonor.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_arkonor.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_arkonor.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_arkonor.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_arkonor.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_arkonor.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_arkonor.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_arkonor_price").value
        },
        bistot: {
            tritanium: stat_bistot.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_bistot.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_bistot.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_bistot.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_bistot.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_bistot.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_bistot.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_bistot.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_bistot_price").value
        },
        mercoxit: {
            tritanium: stat_mercoxit.tritanium*document.getElementById("reprocessing_efficiency").value/100,
            pyerite: stat_mercoxit.pyerite*document.getElementById("reprocessing_efficiency").value/100,
            mexallon: stat_mercoxit.mexallon*document.getElementById("reprocessing_efficiency").value/100,
            isogen: stat_mercoxit.isogen*document.getElementById("reprocessing_efficiency").value/100,
            nocxium: stat_mercoxit.nocxium*document.getElementById("reprocessing_efficiency").value/100,
            zydrine: stat_mercoxit.zydrine*document.getElementById("reprocessing_efficiency").value/100,
            megacyte: stat_mercoxit.megacyte*document.getElementById("reprocessing_efficiency").value/100,
            morphite: stat_mercoxit.morphite*document.getElementById("reprocessing_efficiency").value/100,
            cost: document.getElementById("compressed_mercoxit_price").value
        }
    }

    
    var solver = require("javascript-lp-solver");
    model = {
        "optimize": "cost",
        "opType": "min",
        "constraints": constraints,
        "variables": variables,
    };

    
    results = solver.Solve(model);
    
    document.getElementById("compressed_veldspar_needed").value = results.veldspar ? Math.ceil(results.veldspar*100) : 0
    document.getElementById("compressed_scordite_needed").value = results.scordite ? Math.ceil(results.scordite*100) : 0
    document.getElementById("compressed_pyroxeres_needed").value = results.pyroxeres ? Math.ceil(results.pyroxeres*100) : 0
    document.getElementById("compressed_plagioclase_needed").value = results.plagioclase ? Math.ceil(results.plagioclase*100) : 0
    document.getElementById("compressed_omber_needed").value = results.omber ? Math.ceil(results.omber*100) : 0
    document.getElementById("compressed_kernite_needed").value = results.kernite ? Math.ceil(results.kernite*100) : 0
    document.getElementById("compressed_jaspet_needed").value = results.jaspet ? Math.ceil(results.jaspet*100) : 0
    document.getElementById("compressed_hemorphite_needed").value = results.hemorphite ? Math.ceil(results.hemorphite*100) : 0
    document.getElementById("compressed_hedbergite_needed").value = results.hedbergite ? Math.ceil(results.hedbergite*100) : 0
    document.getElementById("compressed_gneiss_needed").value = results.gneiss ? Math.ceil(results.gneiss*100) : 0
    document.getElementById("compressed_dark_ochre_needed").value = results.dark_ochre ? Math.ceil(results.dark_ochre*100) : 0
    document.getElementById("compressed_crokite_needed").value = results.crokite ? Math.ceil(results.crokite*100) : 0
    document.getElementById("compressed_spodumain_needed").value = results.spodumain ? Math.ceil(results.spodumain*100) : 0
    document.getElementById("compressed_arkonor_needed").value = results.arkonor ? Math.ceil(results.arkonor*100) : 0
    document.getElementById("compressed_bistot_needed").value = results.bistot ? Math.ceil(results.bistot*100) : 0
    document.getElementById("compressed_mercoxit_needed").value = results.mercoxit ? Math.ceil(results.mercoxit*100) : 0
    document.getElementById("average_cost").value = results.result ? Math.ceil(results.result*100) : 0

}

