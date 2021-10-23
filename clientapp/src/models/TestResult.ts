import { TestCase } from './TestCase';
export class TestCaseResult {
    test: TestCase | undefined;
    result: string | undefined;
    stepsSuccess: boolean[] | undefined;
}