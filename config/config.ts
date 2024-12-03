const getEnvVariable = (VARIABLE_NAME: string) => {
  const envValue = (import.meta as any).env[VARIABLE_NAME];

  if (!envValue) {
    throw new Error(`${VARIABLE_NAME} is not defined in environment variables.`);
  }
  return envValue;
};

export default getEnvVariable;
