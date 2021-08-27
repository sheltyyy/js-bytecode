export enum OP {
    REGISTER_STRING,

    LOAD_I8,
    LOAD_I32,
    LOAD_F64,
    LOAD_STRING,
    LOAD_OBJ,
    LOAD_ARRAY,
    LOAD_VAR,
    LOAD_GLOBAL,
    LOAD_REGEX,

    NEW_INSTANCE_AND_PUSH,
    NEW_INSTANCE_NO_PUSH,
    CALL_FUNCTION_BY_PROP_NO_PUSH,
    CALL_FUNCTION_BY_PROP_AND_PUSH,
    CALL_STACK_NO_PUSH,
    CALL_STACK_AND_PUSH,

    //math
    ADD,
    DIV,
    MUL,
    SUB,
    BIT_SHIFT_LEFT,
    BIT_SHIFT_RIGHT,
    XOR,
    BITWISE_OR,
    BITWISE_AND,
    REMAINDER,
    EXPONENT,
    UNSIGNED_RIGHT_SHIFT,

    PUSH_ARRAY_NO_POP,
    SET_OBJ_PROPS_NO_POP,
    GET_OBJ_PROP_AND_PUSH,
    
    ASSIGN_UNDEFINED,
    ASSIGN,
    ASSIGN_GLOBAL,
    ASSIGN_OBJECT,
};