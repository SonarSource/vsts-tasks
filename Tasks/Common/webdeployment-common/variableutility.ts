
export function isPredefinedVariable(variable: string): boolean {
    var predefinedVarPrefix = ['agent.', 'azure_http_user_agent', 'build.', 'common.', 'release.', 'system', 'tf_'];
    for(let varPrefix of predefinedVarPrefix) {
        if(variable.toLowerCase().startsWith(varPrefix)) {
            return true;
        }
    }
    return false;
}