  
import { useRef } from 'react';
import { Client } from './client';
import { useSignal } from 'utils/hooks';
import config from 'config';
import useDeepCompareEffect from 'use-deep-compare-effect'

const HOST_URL = config.host_url;
const cli = new Client(HOST_URL);

export const useCommand = (command: any, ...args: any[]) => {
    const ref = useRef(null as unknown as { status: number, data?: any, message?: string, headers?: Headers, _refetch: () => Promise<void> });
    const signal = useSignal();

    useDeepCompareEffect(() => {
        const fn = async () => {
            const _args = args || [];
            
            const rq = await cli.execute(new command(..._args))
            ref.current = { ...rq, _refetch: fn };
            signal();
        }
        ref.current = { status: 102, _refetch: fn };
        fn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [args]);
    
    return ref.current as { status: number, data?: any, message?: string, headers?: Headers, _refetch: () => Promise<void> };
}