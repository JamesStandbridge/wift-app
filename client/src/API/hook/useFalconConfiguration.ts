import { useQuery } from 'react-query';
import { DEFAULT_OPTIONS, UseQueryOptions } from './type';
import { fetchFalconConfiguration } from '../repository/configuration-repository';

/**
 * React hook for fetching the Millennium Falcon's configuration.
 *
 * This hook leverages the `react-query` library to efficiently manage and synchronize
 * the Millennium Falcon's configuration data. It uses a default configuration but allows for
 * overriding with custom options.
 *
 * The primary use case for this hook is to retrieve the Millennium Falcon's configuration settings
 * (e.g., autonomy, departure point, arrival point, routes database) within a React component.
 *
 * Usage:
 * ```typescript
 * const { data: falconConfig, isLoading, isError } = useFalconConfiguration();
 *
 * if (isLoading) {
 *     return <LoadingComponent />;
 * }
 *
 * if (isError) {
 *     return <ErrorComponent />;
 * }
 *
 * console.log(falconConfig.autonomy);  // For example, might output: 500
 * ```
 *
 * @function
 * @param {UseQueryOptions} [options=DEFAULT_OPTIONS] - Optional custom query options to override the default ones.
 * @returns {UseQueryResult<MillenniumFalconConfig, Error>} - The query result object containing data, status, and other metadata.
 */
const useFalconConfiguration = (options: UseQueryOptions = DEFAULT_OPTIONS) => {
    return useQuery('falconConfiguration', fetchFalconConfiguration, {
        ...DEFAULT_OPTIONS,
        ...options,
    });
};

export default useFalconConfiguration;
