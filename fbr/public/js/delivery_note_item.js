
frappe.ui.form.on("Delivery Note Item", {
    custom_mt: function(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        if (row.custom_mt) {
            row.qty = row.custom_mt * 1000;
            frm.refresh_field("items");
        }
    },

    custom_mt_rate: function(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        if (row.custom_mt_rate) {
            row.rate = row.custom_mt_rate / 1000;
            frm.refresh_field("items");
        }
    }
});


