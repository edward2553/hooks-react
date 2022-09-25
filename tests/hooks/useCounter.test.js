const { renderHook, act } = require("@testing-library/react");
const { useCounter } = require("../../src/hooks/useCounter");

describe("Pruebas en el useCounter", () => {
  test("Debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Debe de generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("Debe de incrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(103);
  });

  test("Debe de decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(97);
  });
  
  test("Debe de hacer reset de el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, reset } = result.current;

    act(() => {
      decrement();
      decrement(2);
      reset();
    });

    expect(result.current.counter).toBe(100);
  });

});
