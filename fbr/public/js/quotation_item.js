
frappe.ui.form.on("Quotation Item", {
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


frappe.ui.form.on("Quotation", {
    refresh(frm) {
        // Remove the "Set as Lost" button (added by ERPNext core)
        if (frm.custom_buttons && frm.custom_buttons["Set as Lost"]) {
            frm.remove_custom_button("Set as Lost");
        }

        // Also handle delayed rendering (ERPNext sometimes adds buttons after refresh)
        setTimeout(() => {
            frm.remove_custom_button("Set as Lost");
        }, 300);
    }
});
