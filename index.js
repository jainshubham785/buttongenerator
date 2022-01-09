function update_property(element) {
    const form = element.form;
    const display = document.querySelector(`#code-${element.name}`);
    display.textContent = `${element.value}${element.getAttribute("data-unit")}`;

    const unit_textShadow = form.textShadow_x.getAttribute("data-unit");
    const unit_boxShadow = form.boxShadow_x.getAttribute("data-unit");

    // console.log(form.textShadow_blur);
    const properties = {
        fontFamily: form.fontFamily.value,
        color: form.color.value,
        backgroundColor: form.backgroundColor.value,
        fontSize: form.fontSize.value + form.fontSize.getAttribute("data-unit"),
        borderRadius: form.borderRadius.value + form.borderRadius.getAttribute("data-unit"),
        textShadow: form.textShadow_x.value + unit_textShadow + " " +
            form.textShadow_y.value + unit_textShadow + " " +
            form.textShadow_blur.value + unit_textShadow + " " +
            form.textShadow_color.value,
        boxShadow: form.boxShadow_x.value + unit_boxShadow + " " +
            form.boxShadow_y.value + unit_boxShadow + " " +
            form.boxShadow_blur.value + unit_boxShadow + " " +
            form.boxShadow_color.value,
        padding: form.padding_tb.value + unit_boxShadow + " " +
            form.padding_lr.value + unit_boxShadow,
        border: form.borderStyle.value + " " + form.borderWidth.value + unit_boxShadow + " " + form.borderColor.value
    };
    update_button(properties);
}

function update_button(input) {
    const ele = document.querySelector(".btn");
    ele.style.fontFamily = input.fontFamily;
    ele.style.color = input.color;
    ele.style.backgroundColor = input.backgroundColor;
    ele.style.fontSize = input.fontSize;
    ele.style.borderRadius = input.borderRadius;
    ele.style.textShadow = input.textShadow;
    ele.style.boxShadow = input.boxShadow;
    ele.style.padding = input.padding;
    ele.style.border = input.border;
}
