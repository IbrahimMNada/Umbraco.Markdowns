import { UmbEntryPointOnInit } from '@umbraco-cms/backoffice/extension-api';
import { manifests } from './root/manifest';

export const onInit: UmbEntryPointOnInit = (_host, extensionRegistry) => {
    extensionRegistry.registerMany([
        ...manifests
    ]);
};
