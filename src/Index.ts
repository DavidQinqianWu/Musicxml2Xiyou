import cheerio from "cheerio";
class MusicXML2Xiyou {
	private _xmlDom;
	constructor(private _xmlString: string) {
		this._xmlDom = cheerio.load(this._xmlString);
	}
}
