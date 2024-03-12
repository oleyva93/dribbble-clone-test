// If an import fails to load during lazy loading, this retries the lazy loading after waiting the interval period.
export async function retry<T>(
  importFn: () => Promise<{ default: T }>,
  retries = 2,
  interval = 1000
) {
  try {
    return await importFn();
  } catch (error: unknown) {
    if (retries) {
      console.info("Retrying lazy load ", retries);
      await wait(interval);
      return retry(importFn, retries - 1, interval);
    }
    throw new Error(error as string);
  }
}

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
