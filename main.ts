async function others() {
  try {
    const module = await import("./function_composition/index");

    const full = module.compose(123);
    console.log(full);
    
  } catch (error) {
    console.error("Error loading module:", error);
  }
}

others();