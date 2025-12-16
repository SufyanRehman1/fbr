frappe.ui.form.on("Quotation", {
    refresh(frm) {
        // remove the "Set as Lost" button if it exists
        if (frm.custom_buttons && frm.custom_buttons["Set as Lost"]) {
            frm.remove_custom_button("Set as Lost");
        }

        // In case ERPNext adds it dynamically (after refresh)
        setTimeout(() => {
            frm.remove_custom_button("Set as Lost");
        }, 300);
    }
});
