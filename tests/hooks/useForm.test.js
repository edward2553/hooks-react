import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en useForm.jsx", () => {
  const initialForm = {
    name: "Edward",
    email: "edward@gmail.com",
  };

  test("Debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    // console.log(result.current);
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe de cambiar el nombre del formulario", () => {
    const newValue = "Edward";

    // montar el hook
    // onInputChange() //act, event
    //expect: result.current.name === Edward
    //Expect: result.current.formState.name === Edward

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({target: { name: "name", value: newValue }});
    });

    expect(result.current.name).toEqual(newValue);
    expect(result.current.formState.name).toEqual(newValue);

  });
  
  test("Debe de cambiar el nombre del formulario", () => {
    const newValue = "Edward";

    // montar el hook
    // onInputChange() //act, event
    //expect: result.current.name === Edward
    //Expect: result.current.formState.name === Edward

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({target: { name: "name", value: newValue }});
      onResetForm();
    });

    expect(result.current.name).toEqual(initialForm.name);
    expect(result.current.formState.name).toEqual(initialForm.name);

  });
});
