async function others() {
  try {
    const module = await import("./composition_function/index");

    const full = module.compose(123);
    console.log(full);
    
  } catch (error) {
    console.error("Error loading module:", error);
  }
}

others();