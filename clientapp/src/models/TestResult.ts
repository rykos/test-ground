import { TestModel } from './TestModel';
export class TestResult {
    test: TestModel | undefined;
    result: string | undefined;
    stepsSuccess: boolean | undefined;
}