/**
 * `UseQueryOptions` represents configuration options for a custom query hook.
 *
 * @property {number | false} refetchInterval - Determines the frequency (in milliseconds)
 *     at which the query will automatically refetch data. Setting it to `false` will disable
 *     automatic refetching based on intervals.
 * @property {boolean} refetchOnWindowFocus - If set to `true`, the query will refetch data
 *     every time the window regains focus. Default is `false`.
 */
export type UseQueryOptions = {
    refetchInterval?: number | false;
    refetchOnWindowFocus?: boolean;
};

/**
 * `DEFAULT_OPTIONS` provides a default configuration for the custom query hook.
 *
 * - `refetchInterval` is set to `false` to disable automatic refetching based on intervals.
 * - `refetchOnWindowFocus` is set to `false` to prevent refetching when the window regains focus.
 */
export const DEFAULT_OPTIONS: UseQueryOptions = {
    refetchInterval: false,
    refetchOnWindowFocus: false,
};
