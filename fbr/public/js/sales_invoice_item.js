
frappe.ui.form.on("Sales Invoice Item", {
    mt: function(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        if (row.mt) {
            row.qty = row.mt * 1000;
            frm.refresh_field("items");
        }
    },

    mt_rate: function(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        if (row.mt_rate) {
            row.rate = row.mt_rate / 1000; 
            frm.refresh_field("items");     
        }
    }
});


