export class PathConfig {

    //public static get API_ENDPOINT(): string { return 'http://fantasy-workflow-admin-tool-qa-1490227006.us-east-1.elb.amazonaws.com/admin/'; }
    public static get API_ENDPOINT(): string { return 'admin/'; }

    public static LOGIN:string = PathConfig.API_ENDPOINT + 'login'

}
