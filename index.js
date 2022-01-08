function update_property(element) {
    const form = element.form;
    const display = document.querySelector(`#code-${element.name}`);
    display.textContent = `${element.value}${element.getAttribute("data-unit")}`;
  
    const properties = {
      fontFamily: form.fontFamily.value,
      color: form.color.value,
      backgroundColor: form.backgroundColor.value,
      fontSize: form.fontSize.value + form.fontSize.getAttribute("data-unit"),
      borderRadius: form.borderRadius.value + form.borderRadius.getAttribute("data-unit")
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
  }
  