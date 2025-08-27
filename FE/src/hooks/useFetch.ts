import { useRef, useState } from 'react';

/**
 * Custom hook for handling asynchronous operations with loading, data, and error states.
 *
 * @template DataType - The type of data returned by the asynchronous function.
 * @template Args - The type of arguments expected by the asynchronous function.
 * @param {(...args: Args) => Promise<DataType>} fn - The asynchronous function to be executed.
 * @param {Object} [extraParams] - Additional parameters for customizing hook behavior.
 * @param {(data?: DataType) => void} [extraParams.onSuccess] - Callback function to be executed on successful execution.
 * @param {(error?: IErrorResponse) => void} [extraParams.onError] - Callback function to be executed on error.
 * @returns {Object} An object containing loading, silentLoading, data, error, execute, reload, and silentReload.
 * @property {boolean} loading - Indicates whether the asynchronous operation is in progress.
 * @property {boolean} silentLoading - Indicates whether the silent asynchronous operation is in progress.
 * @property {DataType | undefined} data - The data returned by the asynchronous operation.
 * @property {IErrorResponse | undefined} error - The error object in case of an error.
 * @property {() => Promise<void>} execute - Function to execute the asynchronous operation.
 * @property {() => void} reload - Function to reload the asynchronous operation.
 * @property {() => void} silentReload - Function to silently reload the asynchronous operation.
 */
export default <DataType, Args extends unknown[]>(
  fn: (...args: Args) => Promise<DataType>,
  extraParams?: {
    onSuccess?: (data?: DataType) => void;
    onError?: (error?: any, errorCode?: string | number) => void;
  },
) => {
  const [data, setData] = useState<DataType>();
  const [loading, setLoading] = useState(false);
  const [silentLoading, setSilentLoading] = useState(false);
  const [error, setError] = useState<any>();

  // Ref to store parameters for reloading
  const params = useRef<Args>();

  /**
   * Executes the asynchronous function.
   *
   * @param isSilent If true, performs a silent execution without clearing previous error and data.
   * @returns An asynchronous function that can be called with arguments for execution.
   */
  const execute =
    (isSilent = false) =>
    async (...args: Args) => {
      if (!isSilent) {
        setError(undefined);
        setData(undefined);
      }
      try {
        if (isSilent) {
          setSilentLoading(true);
        } else {
          setLoading(true);
        }
        params.current = args;
        const responseData = await fn(...args);
        setData(responseData);
        extraParams?.onSuccess?.(responseData);
      } catch (error: any) {
        const errorResponse = error?.response?.data
          ? error?.response?.data
          : error;
        setError(errorResponse);
        extraParams?.onError?.(errorResponse, error?.code);
      } finally {
        setLoading(false);
        setSilentLoading(false);
      }
    };

  /**
   * Reloads the data by re-executing the asynchronous function with the stored parameters.
   */
  const reload = () => {
    execute()(...params.current!);
  };

  /**
   * Performs a silent reload by re-executing the asynchronous function without clearing previous error and data.
   */
  const silentReload = () => {
    execute(true)(...params.current!);
  };

  // Return the state variables and functions for external use
  return {
    loading,
    silentLoading,
    data,
    error,
    execute: execute(),
    reload,
    silentReload,
  };
};
