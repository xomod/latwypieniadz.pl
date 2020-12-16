class WPClient {
    readonly hostname: string = "https://latwypieniadz.pl/";
    readonly url: string = `${this.hostname}wp-json/wp/v2/`;

    async getData(subject: "posts" | "categories", args?: [string, string | number][]) {
        const stringifiedArgs = args && args.length > 0 ? "?" + args.filter(arg => arg && arg.length === 2).map(arg => arg.join("=")).join("&") : "";

        console.log(`${this.url}${subject}${stringifiedArgs}`);
        return await fetch(`${this.url}${subject}${stringifiedArgs}`).then(data => data.json());
    }
}

export default WPClient;