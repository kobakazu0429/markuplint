import { Document } from '../parser';
import { CustomRule, VerifiedResult } from '../rule';
import { ConfigureFileJSON, ConfigureFileJSONRules, NodeRule } from './JSONInterface';
/**
 * TODO: Isolate API that between constractor and file I/O.
 */
export default class Ruleset {
    static readonly NOFILE: string;
    static create(config: ConfigureFileJSON | string, rules: CustomRule[]): Promise<Ruleset>;
    rules: ConfigureFileJSONRules;
    nodeRules: NodeRule[];
    childNodeRules: NodeRule[];
    private _rules;
    private _rawConfig;
    private constructor();
    loadRC(fileOrDir: string): Promise<void>;
    /**
     * @param config JSON Data
     */
    setConfig(config: ConfigureFileJSON, configFilePath: string): Promise<void>;
    verify(nodeTree: Document<null, {}>, locale: string): Promise<VerifiedResult[]>;
}