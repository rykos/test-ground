export class TestCase {
    id: number | undefined;
    name: string | undefined;
    steps: string[] | undefined;
    requirements: string[] | undefined;
    category: string | undefined;
    author: string | undefined;
    automation: boolean | undefined;
    description: string | undefined;
    expectedResult: string | undefined;
}