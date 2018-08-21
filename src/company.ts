class CompanyManager {
    private static _instance: CompanyManager;

    private constructor() { }

    public static getInstance() {
        return this._instance || (this._instance = new this());
    }

    public async list(offset: number, limit: number) {
        console.log('CompanyManager list');
    }
}

const companyMgr = CompanyManager.getInstance();

export default companyMgr;