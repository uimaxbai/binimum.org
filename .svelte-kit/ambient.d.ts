
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const DOCKER_BUILDKIT: string;
	export const ENABLE_DYNAMIC_INSTALL: string;
	export const LESSOPEN: string;
	export const GITHUB_TOKEN: string;
	export const GIT_COMMITTER_NAME: string;
	export const PYTHONIOENCODING: string;
	export const GITHUB_CODESPACE_TOKEN: string;
	export const USER: string;
	export const RVM_PATH: string;
	export const NVS_ROOT: string;
	export const HOSTNAME: string;
	export const DOTNET_USE_POLLING_FILE_WATCHER: string;
	export const CONDA_SCRIPT: string;
	export const PIPX_HOME: string;
	export const SHLVL: string;
	export const GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN: string;
	export const HUGO_ROOT: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const ORYX_ENV_TYPE: string;
	export const NVM_BIN: string;
	export const CODESPACES: string;
	export const DOTNET_RUNNING_IN_CONTAINER: string;
	export const NVM_SYMLINK_CURRENT: string;
	export const DYNAMIC_INSTALL_ROOT_DIR: string;
	export const PIPX_BIN_DIR: string;
	export const NVM_INC: string;
	export const rvm_stored_umask: string;
	export const ORYX_DIR: string;
	export const GRADLE_HOME: string;
	export const JUPYTERLAB_PATH: string;
	export const rvm_user_install_flag: string;
	export const MAVEN_HOME: string;
	export const GOROOT: string;
	export const NODE_ROOT: string;
	export const GITHUB_GRAPHQL_URL: string;
	export const GITHUB_USER: string;
	export const NVM_DIR: string;
	export const PYTHON_PATH: string;
	export const DOTNET_SKIP_FIRST_TIME_EXPERIENCE: string;
	export const ContainerVersion: string;
	export const NVS_HOME: string;
	export const GITHUB_API_URL: string;
	export const rvm_bin_path: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const _: string;
	export const RUBY_VERSION: string;
	export const PROMPT_DIRTRIM: string;
	export const IRBRC: string;
	export const CLOUDENV_ENVIRONMENT_ID: string;
	export const DOTNET_ROOT: string;
	export const NVS_DIR: string;
	export const PHP_ROOT: string;
	export const PATH: string;
	export const JAVA_ROOT: string;
	export const VSCODE_AGENT_FOLDER: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const HUGO_DIR: string;
	export const NPM_GLOBAL: string;
	export const SHELL_LOGGED_IN: string;
	export const MY_RUBY_HOME: string;
	export const LANG: string;
	export const SDKMAN_DIR: string;
	export const RUBY_ROOT: string;
	export const LS_COLORS: string;
	export const SDKMAN_PLATFORM: string;
	export const GITHUB_REPOSITORY: string;
	export const GITHUB_COPILOT_WORKSPACE_CONFIG: string;
	export const SHELL: string;
	export const GOPATH: string;
	export const rvm_prefix: string;
	export const rvm_loaded_flag: string;
	export const GEM_HOME: string;
	export const ORYX_PREFER_USER_INSTALLED_SDKS: string;
	export const LESSCLOSE: string;
	export const ORYX_SDK_STORAGE_BASE_URL: string;
	export const CONDA_DIR: string;
	export const rvm_version: string;
	export const DEBIAN_FLAVOR: string;
	export const GIT_COMMITTER_EMAIL: string;
	export const GEM_PATH: string;
	export const JAVA_HOME: string;
	export const NVS_USE_XZ: string;
	export const INTERNAL_VSCS_TARGET_URL: string;
	export const PWD: string;
	export const NVM_CD_FLAGS: string;
	export const GITHUB_SERVER_URL: string;
	export const PHP_PATH: string;
	export const PYTHON_ROOT: string;
	export const RAILS_DEVELOPMENT_HOSTS: string;
	export const NVS_OS: string;
	export const CODESPACE_NAME: string;
	export const RUBY_HOME: string;
	export const MAVEN_ROOT: string;
	export const rvm_path: string;
	export const NUGET_XMLDOC_MODE: string;
	export const VSCODE_CWD: string;
	export const VSCODE_NLS_CONFIG: string;
	export const VSCODE_HANDLES_SIGPIPE: string;
	export const VSCODE_ESM_ENTRYPOINT: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const BROWSER: string;
	export const ELECTRON_RUN_AS_NODE: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const VSCODE_L10N_BUNDLE_LOCATION: string;
	export const AZURE_MONITOR_DISTRO_VERSION: string;
	export const AZURE_MONITOR_STATSBEAT_FEATURES: string;
	export const AZURE_MONITOR_PREFIX: string;
	export const ELECTRON_NO_ASAR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		DOCKER_BUILDKIT: string;
		ENABLE_DYNAMIC_INSTALL: string;
		LESSOPEN: string;
		GITHUB_TOKEN: string;
		GIT_COMMITTER_NAME: string;
		PYTHONIOENCODING: string;
		GITHUB_CODESPACE_TOKEN: string;
		USER: string;
		RVM_PATH: string;
		NVS_ROOT: string;
		HOSTNAME: string;
		DOTNET_USE_POLLING_FILE_WATCHER: string;
		CONDA_SCRIPT: string;
		PIPX_HOME: string;
		SHLVL: string;
		GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN: string;
		HUGO_ROOT: string;
		HOME: string;
		OLDPWD: string;
		ORYX_ENV_TYPE: string;
		NVM_BIN: string;
		CODESPACES: string;
		DOTNET_RUNNING_IN_CONTAINER: string;
		NVM_SYMLINK_CURRENT: string;
		DYNAMIC_INSTALL_ROOT_DIR: string;
		PIPX_BIN_DIR: string;
		NVM_INC: string;
		rvm_stored_umask: string;
		ORYX_DIR: string;
		GRADLE_HOME: string;
		JUPYTERLAB_PATH: string;
		rvm_user_install_flag: string;
		MAVEN_HOME: string;
		GOROOT: string;
		NODE_ROOT: string;
		GITHUB_GRAPHQL_URL: string;
		GITHUB_USER: string;
		NVM_DIR: string;
		PYTHON_PATH: string;
		DOTNET_SKIP_FIRST_TIME_EXPERIENCE: string;
		ContainerVersion: string;
		NVS_HOME: string;
		GITHUB_API_URL: string;
		rvm_bin_path: string;
		SDKMAN_CANDIDATES_API: string;
		_: string;
		RUBY_VERSION: string;
		PROMPT_DIRTRIM: string;
		IRBRC: string;
		CLOUDENV_ENVIRONMENT_ID: string;
		DOTNET_ROOT: string;
		NVS_DIR: string;
		PHP_ROOT: string;
		PATH: string;
		JAVA_ROOT: string;
		VSCODE_AGENT_FOLDER: string;
		SDKMAN_CANDIDATES_DIR: string;
		HUGO_DIR: string;
		NPM_GLOBAL: string;
		SHELL_LOGGED_IN: string;
		MY_RUBY_HOME: string;
		LANG: string;
		SDKMAN_DIR: string;
		RUBY_ROOT: string;
		LS_COLORS: string;
		SDKMAN_PLATFORM: string;
		GITHUB_REPOSITORY: string;
		GITHUB_COPILOT_WORKSPACE_CONFIG: string;
		SHELL: string;
		GOPATH: string;
		rvm_prefix: string;
		rvm_loaded_flag: string;
		GEM_HOME: string;
		ORYX_PREFER_USER_INSTALLED_SDKS: string;
		LESSCLOSE: string;
		ORYX_SDK_STORAGE_BASE_URL: string;
		CONDA_DIR: string;
		rvm_version: string;
		DEBIAN_FLAVOR: string;
		GIT_COMMITTER_EMAIL: string;
		GEM_PATH: string;
		JAVA_HOME: string;
		NVS_USE_XZ: string;
		INTERNAL_VSCS_TARGET_URL: string;
		PWD: string;
		NVM_CD_FLAGS: string;
		GITHUB_SERVER_URL: string;
		PHP_PATH: string;
		PYTHON_ROOT: string;
		RAILS_DEVELOPMENT_HOSTS: string;
		NVS_OS: string;
		CODESPACE_NAME: string;
		RUBY_HOME: string;
		MAVEN_ROOT: string;
		rvm_path: string;
		NUGET_XMLDOC_MODE: string;
		VSCODE_CWD: string;
		VSCODE_NLS_CONFIG: string;
		VSCODE_HANDLES_SIGPIPE: string;
		VSCODE_ESM_ENTRYPOINT: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		BROWSER: string;
		ELECTRON_RUN_AS_NODE: string;
		VSCODE_IPC_HOOK_CLI: string;
		VSCODE_L10N_BUNDLE_LOCATION: string;
		AZURE_MONITOR_DISTRO_VERSION: string;
		AZURE_MONITOR_STATSBEAT_FEATURES: string;
		AZURE_MONITOR_PREFIX: string;
		ELECTRON_NO_ASAR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
