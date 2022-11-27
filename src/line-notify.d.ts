export declare function lineNotify(message: string, lineNotifyToken: string): Promise<{
    status: number;
    headers: import("axios").AxiosResponseHeaders | Partial<Record<string, string> & {
        "set-cookie"?: string[] | undefined;
    }>;
    data: any;
}>;
//# sourceMappingURL=line-notify.d.ts.map